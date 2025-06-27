import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the provided script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var neexa_xgmx_cc_wpq_ms = "9f3d2693-2a84-473d-bb3b-65eceb179682";
            `,
          }}
        />
        <script
          src="https://chat-widget.neexa.ai/main.js?nonce=1750849971084.2542"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}