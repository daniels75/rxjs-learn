## Installation
### Step 1 
install Visual Studio Code

### Step 2 Install yarn
install yarn via https://www.npmjs.com/package/yarn

### Step 3 Check version of yarn
c:\daniels\RxJS>yarn --version
Should like: 1.13.0 or newer

### Step 4 Create a folder for RxJS
c:\daniels\RxJS>mkdir rxjs-learn

### Step 5 Go to rxjs-learn directory
c:\daniels\RxJS>cd rxjs-learn

### Step 6 Init yarn
c:\daniels\RxJS\rxjs-learn>yarn init -y

### Step 7 Install packages with following command
c:\daniels\RxJS\rxjs-learn>yarn add rxjs webpack webpack-dev-server typescript ts-loader

### Step 8 Install webpack-cli
c:\daniels\RxJS\rxjs-learn>yarn add webpack-cli --dev

### Step 9 Open Visulal Studio Code
c:\daniels\RxJS\rxjs-learn>code .

### Step 10 add following to the package.json file
```
  "scripts": {
    "start": "webpack-dev-server --mode development"
  },
```
### Step 11 setup WebPack

create a file webpack.config.js
Copy the content from: https://github.com/designcourse/rxjs-starter-coursetro


### Step 12 create tsconfig.json file
Copy the content from https://github.com/designcourse/rxjs-starter-coursetro

### Step 13 create a index.html
Copy the content from https://github.com/designcourse/rxjs-starter-coursetro

### Step 14 create code.ts file in src folder

### Step 15 copy following content to code.ts file
```
import { Subject, Observable } from 'rxjs';

console.log(Observable);np
```
### Step 15 From console run a following command and check console
```
yarn run start
```


## Examples

### Cold observable
https://stackblitz.com/edit/typescript-3f8uiq?file=index.ts

### Hot observable
https://stackblitz.com/edit/typescript-5ycshu?file=index.ts

### Switch example
https://stackblitz.com/edit/rxjs-j56cf8?file=index.ts









