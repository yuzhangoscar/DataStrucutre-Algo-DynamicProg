class sortableTable {
    constructor(table) {
        this.table = table;
        this.columnHeader = [];
        const columnHeaders = table.querySelectorAll('thead th');
        for (let index = 0; index < columnHeaders.length; index++) {
            let buttonNode = columnHeaders[index].querySelector('button');
            this.columnHeader.push(columnHeaders[index]);
            if(buttonNode) {
                buttonNode.setAttribute('column-index', index);
                buttonNode.addEventListener('click', this.handleClick.bind(this));
            }
        }
    }
    handleClick(event) {
        const target = event.currentTarget;
        this.sortColumn(target.getAttribute('column-index'));
    }
    sortColumn(columnIndex) {
        if (typeof columnIndex === 'string') {
            columnIndex = parseInt(columnIndex);
        }

        for (let index = 0; index < this.columnHeader.length; index++) {
            if (columnIndex === index) {
                console.log(this.columnHeader[index]);
                if (this.columnHeader[index].getAttribute('aria-sort') === "ascending") {
                    this.columnHeader[index].setAttribute('aria-sort', 'descending');
                }
                else this.columnHeader[index].setAttribute('aria-sort', 'ascending');
            }
        }
    }
}

window.addEventListener('load', () => {
    const table = document.querySelector('table.sortable');
    const sortable = new sortableTable(table);
});
