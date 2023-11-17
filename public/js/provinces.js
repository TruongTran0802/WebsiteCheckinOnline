const host = "https://provinces.open-api.vn/api/";
    var callAPI = (api) =>
    {
        return axios.get(api)
            .then((response) =>
            {
                renderData(response.data, "city");
            });
    }

    callAPI('https://provinces.open-api.vn/api/?depth=1');
    var callApiDistrict = (api) =>
    {
        return axios.get(api)
            .then((response) =>
            {
                renderData(response.data.districts, "district");
            });
    }

    var callApiWard = (api) =>
    {
        return axios.get(api)
            .then((response) =>
            {
                renderData(response.data.wards, "ward");
            });
    }

    var renderData = (array, select) =>
    {
        let row = ' <option selected ></option>';
        array.forEach(element =>
        {
            row += `<option data-id="${element.code}" value="${element.name}">${element.name}</option>`
        });
        document.querySelector("#" + select).innerHTML = row
    }

    $("#city").change(() =>
    {
        callApiDistrict(host + "p/" + $("#city").find(':selected').data('id') + "?depth=2");
        printResult();
    });

    $("#district").change(() =>
    {
        callApiWard(host + "d/" + $("#district").find(':selected').data('id') + "?depth=2");
        printResult();
    });

    $("#ward").change(() =>
    {
        printResult();
    })

    var printResult = () =>
    {
        if ($("#district").find(':selected').data('id') != "" && $("#city").find(':selected').data('id') != "" &&
            $("#ward").find(':selected').data('id') != "")
            {
            let result = $("#city option:selected").text() +
                        " | " + $("#district option:selected").text() +
                        " | " + $("#ward option:selected").text();
            $("#result").text(result)
        }
    }
