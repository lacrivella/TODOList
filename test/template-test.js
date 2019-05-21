import template from '../src/template-list.js';

const test = QUnit.test;

QUnit.module('templating');

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
            <input type="checkbox"checked>
            <label for="podcast">Catch up on Podcasts</label>
        <div>
    `;

    const html = template(lists);
    //Assert
    assert.htmlEqual(html, expected);
});

test('template returning not checked', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const lists = {
        task: 'Catch up on Podcasts',
        completed: false,
        label: 'podcast'
    };
    //Act 
    // Call the function you're testing and set the result to a const

    const expected = /*html*/`
        <div>
            <input type="checkbox">
            <label for="podcast">Catch up on Podcasts</label>
        <div>
    `;

    const html = template(lists);
    //Assert
    assert.htmlEqual(html, expected);
});