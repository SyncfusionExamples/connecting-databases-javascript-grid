let data = new ej.data.DataManager({
    url: 'https://localhost:7011/api/Grid',
    insertUrl: 'https://localhost:7011/api/Grid/Insert',
    updateUrl: 'https://localhost:7011/api/Grid/Update',
    removeUrl: 'https://localhost:7011/api/Grid/Remove',
    batchUrl: 'https://localhost:7011/api/Grid/BatchUpdate',
    adaptor: new ej.data.UrlAdaptor()
});
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isIdentity: true, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2', textAlign: 'Right', type: 'number' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
    ]
});
grid.appendTo('#Grid');