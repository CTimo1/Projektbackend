/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { exec } from 'child_process';
import router from '@adonisjs/core/services/router'


router.get('/vypni', async () => {
  exec('pinctrl set 17 dl',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });


  return {
    status: 'OK',
  }
})

router.get('/zapni', async () => {
  exec('pinctrl set 17 dh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });


  return {
    status: 'OK',
  }
})
