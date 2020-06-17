var link = document.createElement("meta");

link.setAttribute("property", "og:title");
link.content = "Override OG Title Metadata";

document.getElementsByTagName("head")[0].appendChild(link);
