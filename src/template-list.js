function template(lists) {
    let checked ='';
    
    if(lists.completed) {
        checked = 'checked';
    }

    return /*html*/`
    <div>
        <input type="checkbox"${checked}>
        <label for="${lists.label}">${lists.task}</label>
    <div>
    `;
}

export default template;