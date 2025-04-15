export class CustomAdaptor extends ej.data.UrlAdaptor {
    processResponse() {
        // Calling base class processResponse function.
        const original = super.processResponse.apply(this, arguments);
        return original;
    }


    insert(dm, data) {
        return {
            url: dm.dataSource.insertUrl || dm.dataSource.url,
            data: JSON.stringify({
                __RequestVerificationToken: "Syncfusion",
                value: data,
                action: 'insert'
            }),
            type: 'POST'
        };
    }

    update(dm, keyField, value) {
        return {
            url: dm.dataSource.updateUrl || dm.dataSource.url,
            data: JSON.stringify({
                __RequestVerificationToken: "Syncfusion",
                value: value,
                action: 'update'
            }),
            type: 'POST'
        };
    }

    remove(dm, keyField, value) {
        return {
            url: dm.dataSource.removeUrl || dm.dataSource.url,
            data: JSON.stringify({
                __RequestVerificationToken: "Syncfusion",
                key: value,
                keyColumn: keyField,
                action: 'remove'
            }),
            type: 'POST'
        };
    }

    batchRequest(dm, changes, e, query, original) {
        return {
            url: dm.dataSource.batchUrl || dm.dataSource.url,
            data: JSON.stringify({
                __RequestVerificationToken: "Syncfusion",
                added: changes.addedRecords,
                changed: changes.changedRecords,
                deleted: changes.deletedRecords,
                key: e.key,
                action: 'batch'
            }),
            type: 'POST'
        };
    }
}