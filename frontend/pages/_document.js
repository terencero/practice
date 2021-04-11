import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}