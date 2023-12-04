"use strict";
const json = [
    {
        "id": 1,
        "product_name": "Oneplus 10",
        "product_info": "Storage:128gb",
        "image": "oneplus.png",
        "qty": 3,
        "price": 896
    },
    {
        "id": 2,
        "product_name": "Nike Jordan",
        "product_info": "Size:8UK",
        "image": "nikejordan.png",
        "qty": 1,
        "price": 392
    },
    {
        "id": 3,
        "product_name": "Wooden Chair",
        "product_info": "Material: Wooden",
        "image": "woodenchair.png",
        "qty": 2,
        "price": 841
    },
    {
        "id": 4,
        "product_name": "Face cream",
        "product_info": "Gender:Women",
        "image": "facecream.png",
        "qty": 2,
        "price": 813
    }
]
$(function() {
        var e = $(".datatables-order-details");
        e.length && e.DataTable({
            data: json,
            columns: [{
                data: "id"
            }, {
                data: "id"
            }, {
                data: "product_name"
            }, {
                data: "price"
            }, {
                data: "qty"
            }, {
                data: ""
            }],
            columnDefs: [{
                className: "control",
                searchable: !1,
                orderable: !1,
                responsivePriority: 2,
                targets: 0,
                render: function(e, t, a, r) {
                    return ""
                }
            }, {
                targets: 1,
                orderable: !1,
                checkboxes: {
                    selectAllRender: '<input type="checkbox" class="form-check-input">'
                },
                render: function() {
                    return '<input type="checkbox" class="dt-checkboxes form-check-input" >'
                },
                searchable: !1
            }, {
                targets: 2,
                responsivePriority: 1,
                searchable: !1,
                orderable: !1,
                render: function(e, t, a, r) {
                    var n = a.product_name,
                        s = a.product_info,
                        o = a.image;
                    return '<div class="d-flex justify-content-start align-items-center text-nowrap"><div class="avatar-wrapper"><div class="avatar me-2">' + (o ? '<img src="' + assetsPath + "img/products/" + o + '" alt="product-' + n + '" class="rounded-2">' : '<span class="avatar-initial rounded-2 bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (n = a.product_name).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><h6 class="text-body mb-0">' + n + '</h6><small class="text-muted">' + s + "</small></div></div>"
                }
            }, {
                targets: 3,
                searchable: !1,
                orderable: !1,
                render: function(e, t, a, r) {
                    return "<span>$" + a.price + "</span>"
                }
            }, {
                targets: 4,
                searchable: !1,
                orderable: !1,
                render: function(e, t, a, r) {
                    return '<span class="text-body">' + a.qty + "</span>"
                }
            }, {
                targets: 5,
                searchable: !1,
                orderable: !1,
                render: function(e, t, a, r) {
                    return '<h6 class="mb-0">$' + a.qty * a.price + "</h6>"
                }
            }],
            order: [2, ""],
            dom: "t",
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function(e) {
                            return "Details of " + e.data().full_name
                        }
                    }),
                    type: "column",
                    renderer: function(e, t, a) {
                        a = $.map(a, function(e, t) {
                            return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                        }).join("");
                        return !!a && $('<table class="table"/><tbody />').append(a)
                    }
                }
            }
        }), setTimeout(() => {
            $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
        }, 300)
    }),
    function() {
        var e = document.querySelector(".delete-order");
        e && (e.onclick = function() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert order!",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonText: "Yes, Delete order!",
                customClass: {
                    confirmButton: "btn btn-primary me-2",
                    cancelButton: "btn btn-label-secondary"
                },
                buttonsStyling: !1
            }).then(function(e) {
                e.value ? Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Order has been removed.",
                    customClass: {
                        confirmButton: "btn btn-success"
                    }
                }) : e.dismiss === Swal.DismissReason.cancel && Swal.fire({
                    title: "Cancelled",
                    text: "Cancelled Delete :)",
                    icon: "error",
                    customClass: {
                        confirmButton: "btn btn-success"
                    }
                })
            })
        });
        e = (new Date).getFullYear();
        document.getElementById("orderYear").innerHTML = e
    }();