
<h3 align="center">News API with Next.js</h3>
  <p align="center">
    Using the News API to pull data and display in an orderly fashion using Next.js. This is the first time using Next.js so I chose a rather simple API to use.
  </p>

## A project made as an Assessment for my Diploma
### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

## Features

* Pull and Display Data from the NewsAPI
* Light/Dark Mode (soon)


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Get a free API Key at [https://newsapi.org/]
2. Clone the repo
   ```sh
   git clone https://github.com/damonwindsor97/exceptional-vpn_project.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4.  Enter your API in `news.jsx` and `technews.jsx`
   ```js
 const response = await fetch(`https://newsapi.org/v2/everything?sources=techradar&pageSize=4&apiKey={YOUR_API_KEY_HERE}`);
   ```
5. Run Development Mode
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Known Bugs

* Light/Dark Mode Toggle not working
* 


### HTML, CSS, SCSS, JavaScript, ,Next, React, Bootstrap

![image](https://github.com/damonwindsor97/exceptional-vpn_project/assets/98252803/af46c216-053e-407b-be4b-4b3c65d7cc32)
![image](https://github.com/damonwindsor97/exceptional-vpn_project/assets/98252803/d6b413f5-a38a-4c22-a47a-9156407b9dce)





[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
