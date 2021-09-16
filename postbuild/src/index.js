import updateScriptsCSP from './updateScriptsCSP';

try {
  updateScriptsCSP();
  console.log('\x1b[32m', 'Postbuild successed!');
} catch (e) {
  console.log('\x1b[31m', e);
}
