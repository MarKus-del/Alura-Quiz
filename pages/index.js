import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Home</title>
      </Head>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <Input
                name="nomeDoUsuario"
                placeholder="Diz ai seu nome para jogar :)"
                onChange={handleChange}
                value={name}
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                {`jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>orem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/MarKus-del" />
    </QuizBackground>
  );
}
