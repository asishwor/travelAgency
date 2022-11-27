import { createGlobalStyle } from "styled-components";
export const GLobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@400;500;600;700&display=swap');
:root{
    --clr-primary:#1e34ee;
    --clr-secondary:#f4fcff;
    --body-bg:#ffffff;
    --heading-font-color:#0c0c0c;
    --body-font-color:#939393;
    --section-bg:#f4fcff;
    --testimonials-bg:#f6f6f6;
    --clr-white:#ffffff;
    --ratings-color:#fef70d;
    --navbar-bg:#1E5F74;
    --fs-100:1rem;
    --fs-200:18px;
    --fs-300:22px;
    --fs-400:28px;
    --fs-500:32px;
    --fs-600:42px;
    --fs-700:52px;
    --fs-800:65px;
    --transition:all .4s  cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
body.dark {
  --clr-primary: #a3c7d6;
  --clr-secondary: #a5c9ca;
  --body-bg: #04293a;
  --heading-font-color: #eeeeee;
  --body-font-color: #ededed;
  --section-bg: #3e2c41;
  --clr-white: #ffffff;
  --testimonials-bg: #1597bb;
  --ratings-color: #fef70d;
}



body{
    font-family: 'Lato', sans-serif;
    color: var(--body-font-color);
    background-color: var(--body-bg);
    line-height: 1.7em;
    font-weight: 400;
}
h1,h2,h3,h4{
    color: var(--heading-font-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
    background-color: var(--clr-primary);
    color: var(--body-bg);
    padding: 12px 30px;
    border: 1px solid transparent;
    border-radius: none;
    font-size:14px;
    outline: none;
    letter-spacing: .9px;
    cursor: pointer;
    &:hover{
        background-color: var(--secondary-bg);
        border: 1px solid var(--clr-primary);
        color: var(--clr-primary);
      transition: var(--transition);
    }
}
img{
    max-width: 100%;
    object-fit: cover;
}
h1{
    font-size: var(--fs-700);
    line-height: 1.4em;
}
h2{
    font-size: var(--fs-600);
}
a{
    text-decoration: none;
    color: inherit;
    transition: all .4s  cubic-bezier(0.6, 0.04, 0.98, 0.335);
    letter-spacing: .5px;
    &:hover{
        color: var(--clr-primary);
        transition: all .4s  cubic-bezier(0.6, 0.04, 0.98, 0.335);
        text-decoration:2px underline;
        text-underline-offset: 10px;
    }
}
.active{
        color: var(--clr-primary);
        transition: all .4s  cubic-bezier(0.6, 0.04, 0.98, 0.335);
        text-decoration:2px underline;
        text-underline-offset: 10px;
    }
ul{
    list-style: none;

}
input{
    background-color: transparent;
    border: none;
    outline: none;
    &:focus,&:hover{
        border: none;
        outline: none;

    }
}
.pagesBanner{
    padding: 90px 0;
    background: url(./images/usa.jpg);
    display: grid;
    place-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center center;
    z-index: 2;

    &::after{
        content: "";
        height: 100%;
        width: 100%;
        background-color: #0005;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    h1{

        color: var(--body-bg);
    }
}
`;
