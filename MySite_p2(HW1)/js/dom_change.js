const changeBtn = document.getElementById('changeBtn');

// список всех полей для перевода
const fields = ['surname', 'name', 'birthYear', 'address', 'phone', 'email'];

const translitMap = {
    'А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ё':'E','Ж':'Zh','З':'Z',
    'И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R',
    'С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh','Щ':'Shch',
    'Ъ':'','Ы':'Y','Ь':'','Э':'E','Ю':'Yu','Я':'Ya',
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z',
    'и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r',
    'с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch',
    'ъ':'','ы':'y','ь':'`','э':'e','ю':'yu','я':'ya'
};

function transliterate(text) {
    return text.split('').map(c => translitMap[c] || c).join('');
}

changeBtn.addEventListener('click', () => {
    fields.forEach(id => {
        const input = document.getElementById(id);
        input.value = transliterate(input.value);
    });
});