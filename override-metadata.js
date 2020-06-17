$(document).ready(function () {
  console.log("ready");
  $("head").append(
    '<meta property="og:title" content="Override OG Title Metadata"/><meta property="og:type" content="website"/><meta property="og:image" content="http://www.party-news.de/party/images/termine/flyer/"/><meta property="og:description" content="Override OG Description Metadata""'
  );
});
