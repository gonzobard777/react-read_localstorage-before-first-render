import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {getStorageTheme, ToggleTheme} from "./ToggleTheme/ToggleTheme";
import {Footer} from "./Footer/Footer";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  return (
    <div className={classNames('app', theme)}>
      <Header
        toggleThemeElem={<ToggleTheme theme={theme} toggleFn={(nextTheme: string) => setTheme(nextTheme)}/>}
      />

      <main>
        Данные
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, earum. Doloremque, necessitatibus perferendis perspiciatis velit vero voluptate voluptatum! Accusantium delectus deserunt, dolor exercitationem id, maiores molestias necessitatibus neque nihil nisi, officiis perspiciatis placeat qui ratione rem rerum sapiente sunt tempora tempore temporibus tenetur veritatis voluptate voluptatibus. Ab accusamus at cupiditate dolorem doloribus eius error, exercitationem explicabo fugiat laudantium magnam
          minima mollitia pariatur qui quidem quos repellat temporibus voluptatum! Adipisci amet autem blanditiis, corporis cumque dicta dolor doloribus ducimus exercitationem explicabo facilis ipsum iure iusto labore numquam obcaecati omnis, quae qui quis ratione recusandae reprehenderit rerum sint soluta sunt temporibus, ullam! Aliquam consectetur debitis dolores earum eius eum, explicabo illum inventore ipsa iusto mollitia nulla, numquam officiis quo reprehenderit repudiandae sed, sit soluta ullam voluptas? Dolorem
          pariatur porro sed voluptate? Alias assumenda consequuntur debitis deserunt distinctio dolore dolores ea error ex excepturi explicabo id illum ipsa iste iure magnam minima nobis, nostrum odio odit, officia optio perferendis quis reiciendis repellendus sequi sint suscipit tenetur veniam voluptatum. Architecto atque doloremque eligendi excepturi impedit iure minus natus neque officiis omnis, perspiciatis placeat quos recusandae sequi, sit tenetur veniam veritatis. Dolores magnam, porro quaerat quas similique sint ut?
          Culpa laborum mollitia porro ullam?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, earum. Doloremque, necessitatibus perferendis perspiciatis velit vero voluptate voluptatum! Accusantium delectus deserunt, dolor exercitationem id, maiores molestias necessitatibus neque nihil nisi, officiis perspiciatis placeat qui ratione rem rerum sapiente sunt tempora tempore temporibus tenetur veritatis voluptate voluptatibus. Ab accusamus at cupiditate dolorem doloribus eius error, exercitationem explicabo fugiat laudantium magnam
          minima mollitia pariatur qui quidem quos repellat temporibus voluptatum! Adipisci amet autem blanditiis, corporis cumque dicta dolor doloribus ducimus exercitationem explicabo facilis ipsum iure iusto labore numquam obcaecati omnis, quae qui quis ratione recusandae reprehenderit rerum sint soluta sunt temporibus, ullam! Aliquam consectetur debitis dolores earum eius eum, explicabo illum inventore ipsa iusto mollitia nulla, numquam officiis quo reprehenderit repudiandae sed, sit soluta ullam voluptas? Dolorem
          pariatur porro sed voluptate? Alias assumenda consequuntur debitis deserunt distinctio dolore dolores ea error ex excepturi explicabo id illum ipsa iste iure magnam minima nobis, nostrum odio odit, officia optio perferendis quis reiciendis repellendus sequi sint suscipit tenetur veniam voluptatum. Architecto atque doloremque eligendi excepturi impedit iure minus natus neque officiis omnis, perspiciatis placeat quos recusandae sequi, sit tenetur veniam veritatis. Dolores magnam, porro quaerat quas similique sint ut?
          Culpa laborum mollitia porro ullam?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, earum. Doloremque, necessitatibus perferendis perspiciatis velit vero voluptate voluptatum! Accusantium delectus deserunt, dolor exercitationem id, maiores molestias necessitatibus neque nihil nisi, officiis perspiciatis placeat qui ratione rem rerum sapiente sunt tempora tempore temporibus tenetur veritatis voluptate voluptatibus. Ab accusamus at cupiditate dolorem doloribus eius error, exercitationem explicabo fugiat laudantium magnam
          minima mollitia pariatur qui quidem quos repellat temporibus voluptatum! Adipisci amet autem blanditiis, corporis cumque dicta dolor doloribus ducimus exercitationem explicabo facilis ipsum iure iusto labore numquam obcaecati omnis, quae qui quis ratione recusandae reprehenderit rerum sint soluta sunt temporibus, ullam! Aliquam consectetur debitis dolores earum eius eum, explicabo illum inventore ipsa iusto mollitia nulla, numquam officiis quo reprehenderit repudiandae sed, sit soluta ullam voluptas? Dolorem
          pariatur porro sed voluptate? Alias assumenda consequuntur debitis deserunt distinctio dolore dolores ea error ex excepturi explicabo id illum ipsa iste iure magnam minima nobis, nostrum odio odit, officia optio perferendis quis reiciendis repellendus sequi sint suscipit tenetur veniam voluptatum. Architecto atque doloremque eligendi excepturi impedit iure minus natus neque officiis omnis, perspiciatis placeat quos recusandae sequi, sit tenetur veniam veritatis. Dolores magnam, porro quaerat quas similique sint ut?
          Culpa laborum mollitia porro ullam?</p>

      </main>

      <Footer/>
    </div>
  );
};


