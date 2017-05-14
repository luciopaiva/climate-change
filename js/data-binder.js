
class DataBinder {

    /**
     * This method does not actually bind to the element, just sets its value.
     *
     * @param {String} elementId the id of the element whose value will be set
     * @param {String} value the value to be set
     * @param {Boolean} isHtml whether the value is HTML
     */
    static setOnce(elementId, value, isHtml = false) {
        const element = document.getElementById(elementId);

        if (element === null) {
            throw `Element "${elementId}" not found`;
        }

        if (element instanceof HTMLInputElement) {
            element.value = value;
        } else {
            Reflect.set(element, isHtml ? 'innerHtml' : 'innerText', value);
        }
    }
}
