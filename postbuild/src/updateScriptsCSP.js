import cheerio from 'cheerio';
import fs from 'fs-extra';
import path from 'path';
import { PATH_CONFIG, CSP_CONFIG, NONCE_LIST } from './config';

let CSPString = 'Header set Content-Security-Policy "';

const updateScriptsCSP = async () => {
  const buildDirFileNameList = await fs.readdir(PATH_CONFIG.BUILD_DIR);
  const htmlFileNameList = buildDirFileNameList.filter((file) => {
    if (!/(.html)$/gi.test(file)) return false;
    return fs.statSync(path.join(PATH_CONFIG.BUILD_DIR, file));
  });

  let nonceCounter = 0;

  const generateScriptId = () => {
    const id = NONCE_LIST[nonceCounter];
    nonceCounter += 1;
    return id;
  };

  await Promise.all(
    htmlFileNameList.map(async (fileName) => {
      const fileContent = fs.readFileSync(path.join(PATH_CONFIG.BUILD_DIR, fileName));
      const $ = cheerio.load(fileContent);

      $('script').each(function iterate() {
        const id = generateScriptId();
        $(this).attr('nonce', id);
        CSP_CONFIG['script-src'].push(`'nonce-${id}'`);
      });

      await fs.writeFile(path.join(PATH_CONFIG.BUILD_DIR, fileName), $.root().html());
    }),
  );

  Object.keys(CSP_CONFIG).forEach((key, keyIndex) => {
    const valuesString = CSP_CONFIG[key].join(' ');

    CSPString = `${CSPString}${keyIndex ? ' ' : ''}${key} ${valuesString};`;
  });
  CSPString += '"';

  let htaccessContent = fs.readFileSync(path.join(PATH_CONFIG.BUILD_DIR, '.htaccess'), {
    encoding: 'utf-8',
  });

  htaccessContent = htaccessContent.replace('{{ HEADER_CSP }}', CSPString);

  await fs.writeFile(path.join(PATH_CONFIG.BUILD_DIR, '.htaccess'), htaccessContent, {
    encoding: 'utf-8',
  });
};

export default updateScriptsCSP;
