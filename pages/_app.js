import React from 'react';
import App, { Container } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NextNprogress
            color="#FFFF"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
        />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
