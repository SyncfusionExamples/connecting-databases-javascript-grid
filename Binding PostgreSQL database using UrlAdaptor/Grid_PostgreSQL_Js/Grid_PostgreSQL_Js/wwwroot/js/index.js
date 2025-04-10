ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit, ej.grids.Filter, ej.grids.Page);

var data = new ej.data.DataManager({
    url: 'https://localhost:7020/api/Grid',
    //insertUrl: 'https://localhost:7020/api/Grid/Insert',
    //updateUrl: 'https://localhost:7020/api/Grid/Update',
    //removeUrl: 'https://localhost:7020/api/Grid/Remove',
    batchUrl: 'https://localhost:7020/api/Grid/BatchUpdate',
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
        { field: 'OrderID', headerText: 'Order ID', isIdentity: true, isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 160 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 150, textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 }
    ],
});
grid.appendTo('#Grid');
