/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestion={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  const dbExterno = await fetch(`https://${githubUser}.${projectName}.vercel.app/api/db`)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
