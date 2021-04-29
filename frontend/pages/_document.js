import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
