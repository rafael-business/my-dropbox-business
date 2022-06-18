
const primary = '/Teste';
const token = 'sl.BJzp1F2XSlWeBOqDajU5pF-iieNfftoJgK5mtZcDG3JIghqFh8GCQhYVp137gSBJLk9hb3Pw5Gs5eVpXI9S4Rm0pPDNizTBHae05d9WsWsbHbvOd-GVrfIHKNoMYBn6Ct18ZTVKFxrQuijU6Kr8';

function formatFileSize( bytes, decimalPoint ) {

    if ( bytes == 0 ) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function filterTable() {

    const query = q => document.querySelectorAll(q);
    const filters = [...query('th input')].map(e => new RegExp(e.value, 'i'));
  
    query('tbody tr').forEach(row => row.style.display = 
      filters.every((f, i) => f.test(row.cells[i].textContent)) ? '' : 'none');
}