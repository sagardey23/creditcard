function moveToNext(field, autoMove) {
    if (field.value.length >= field.maxLength) {
        document.getElementById(autoMove).focus();
    }
}