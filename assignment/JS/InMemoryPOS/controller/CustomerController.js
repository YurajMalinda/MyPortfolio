getAllCustomer();

$("#btnSaveCustomer").click(function (){
    if (checkAll()){
        saveCustomer();
    }else {
        alert("Something went wrong!");
    }
});

function searchCustomer(customerId) {
    return customers.find(function (customer){
        return customer.id = customerId;
    });
}

function saveCustomer() {
    let customerId = $("#cusId").val();
    // check customer if exists or not
    if(searchCustomer(customerId.trim()) == undefined){
        let customerName = $("#cusName").val();
        let customerAddress = $("#cusAddress").val();
        let customerSalary = $("#cusSalary").val();

        let newCustomer = Object.assign({},customers);

// -------continue here-----
    }
}

$("#getAll").click(function (){
    getAllCustomer();
})

function getAllCustomer(){
    $("tblCustomer").empty();
    $("modalTable").empty();

    for (let i=0; i<customers.length; i++){
        let id = customers[i].id;
        let name = customers[i].name;
        let address = customers[i].address;
        let salary = customers[i].salary;

        let row =   <tr>
                        <td>S{id}</td>
                        <td>S{name}</td>
                        <td>S{address}</td>
                        <td>S{salary}</td>
                    </tr>

        $("#tblCustomer").append(row);
        $("#modalTable").append(row);

        bindTableRowEvents();
    }
}

function bindTableRowEvents() {

}