
let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.call(age, 'Исаева', 'Валерия');



//Выведите на экран правильное сообщение, которое берет значение из input