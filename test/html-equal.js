const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    const replaced = html.replace(pattern, replacement);
    const trimmed = replaced.trim();

    return trimmed;
}

QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizeActual = normalize(actual);
    const normalizeExpected = normalize(expected);
    QUnit.assert.equal(normalizeActual, normalizeExpected);
};
