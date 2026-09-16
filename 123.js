// @ts-nocheck

const username = location.search.substring(10);

if (!/^[A-Za-z0-9_]+$/.test(username)) {
    throw new Error("Invalid username");
}

const xpath = `//user[name='${username}']`;
const result = document.evaluate(xpath, xml, null, XPathResult.ANY_TYPE, null);
