const test = QUnit.test;

QUnit.module('templating');

function template(lists) {
    let checked = '';
    
    if(lists.completed) {
        checked = 'checked';
    }

    return /*html*/`
    <div>
        <input type="checkbox" ${checked}>
        <label for="${lists.label}">${lists.task}</label>
    <div>
    `;
}
test('template returning checked', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const lists = {
        task: 'Catch up on Podcasts',
        completed: true,
        label: 'podcast'
    };
    //Act 
    // Call the function you're testing and set the result to a const

    const expected = /*html*/`
        <div>
            <input type="checkbox" checked>
            <label for="podcast">Catch up on Podcasts</label>
        <div>
    `;

    const html = template(lists);
    //Assert
    assert.htmlEqual(html, expected);
});