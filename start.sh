#!/bin/sh

export NODE_ENV=production
export APP_KEY=nlPFJZlddzfdZ1Q_lgpXLojLcXvhL8PJ
export HOST=0.0.0.0
export PORT=3333
export LOG_LEVEL=debug
pinctrl set 17 op

npm run dev
