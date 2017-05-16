
class DataBinder {

    static proxify(model, onWriteCallback) {
        return DataBinder._proxify(model, '<root>', onWriteCallback);
    }

    static _proxify(model, path, onWriteCallback) {
        for (const property in model) {
            //noinspection JSUnfilteredForInLoop
            const value = model[property];
            const isPrimitive = value === null || (typeof value !== 'function' && typeof value !== 'object');
            if (!isPrimitive) {
                //noinspection JSUnfilteredForInLoop
                const fullPath = path.length > 0 ? path + '.' + property : property;
                //noinspection JSUnfilteredForInLoop
                model[property] = DataBinder._proxify(value, fullPath, onWriteCallback);
            }
        }
        return new Proxy(model, { set: DataBinder.setterInterceptor.bind(null, path, onWriteCallback) });
    }

    static bind(elementId, callback) {
        const element = document.getElementById(elementId);

        if (element === null) {
            throw `Element "${elementId}" not found`;
        }

        element.addEventListener('input', event => {
            const element = event.target;
            const value = element.getAttribute('type') === 'number' ? parseInt(element.value, 10) : element.value;
            callback(value);
        });
    }

    static setterInterceptor(basePath, onWriteCallback, model, property, newValue) {
        const oldValue = model[property];
        const fullPath = basePath.length > 0 ? basePath + '.' + property : property;
        onWriteCallback(fullPath, oldValue, newValue);
        return true;
    }

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
            // Reflect.set(element, 'value', value);
        } else {
            Reflect.set(element, isHtml ? 'innerHtml' : 'innerText', value);
        }
    }
}
