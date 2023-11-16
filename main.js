// n1
let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {

	let p = document.createElement('p');
	p.textContent = elem;

    parent.appendChild(p);

    p.addEventListener('click', function() {
        p.textContent = Number(p.textContent) + 1;
    }); 
};



// n2
let elem = document.querySelector('#elem');
let arr2 = [1, 2, 3, 4, 5];

for (let i of arr) {

    let li = document.createElement('li');
    li.textContent = i;

    elem.appendChild(li);

    li.addEventListener('click', function() {
        console.log(li.textContent);
        if (! li.classList.contains('clicked')) {

            li.textContent = li.textContent + '!';
            li.classList.add('clicked');
        }
    });
};



// n3
let table = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
        td.textContent = 'x';
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
};

// n3/4
let table2 = document.querySelector('.table');
let inp1 = document.querySelector('.n3-4inp1');
let inp2 = document.querySelector('.n3-4inp2');
let btn1 = document.querySelector('.n3-4btn1');

btn1.addEventListener('click', function() {

    let y = Number(inp1.value);
    let x = Number(inp2.value);

    for (let i = 0; i < y; i++) {
    	let tr = document.createElement('tr');
    
    	for (let i = 0; i < x; i++) {
    		let td = document.createElement('td');
            td.textContent = 'x';
    		tr.appendChild(td);
    	}
    
    	table2.appendChild(tr);
    };
});



// n4
let table3 = document.querySelector('#table2');
//let k = 1; 
let k = 2; 

for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		
		td.textContent = k; 
        //k++;
		k++ * k++;
		
		tr.appendChild(td);
	}
	
	table3.appendChild(tr);
}



// n5
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table4 = document.querySelector('#table3');

for (let subArr of arr3) {
	let tr = document.createElement('tr');
	
	for (let elem of subArr) {
		let td = document.createElement('td');
		// td.textContent = elem;
        td.textContent = elem * elem;
		tr.appendChild(td);
	}
	
	table4.appendChild(tr);
}



// n6
let table5 = document.querySelector('#table4');
let users = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);

    td2.addEventListener('click', function() {
        user.age++;
        td2.textContent = user.age;
    });
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);

    td3.addEventListener('click', function() {
        user.salary = user.salary + (10 * (user.salary / 100));
        td3.textContent = user.salary;
    });
	
	table5.appendChild(tr);
}



// n7/1
let table6 = document.querySelector('#table5');
let btn2 = document.querySelector('.btn-2');
let tr = document.createElement('tr');

for (let i = 1; i <= 3; i++) {
    let td = document.createElement('td');
	tr.appendChild(td);
}

table6.appendChild(tr);

btn2.addEventListener('click', function() {
    let tr = document.createElement('tr');

    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table6.appendChild(tr);
});


// n7/2 
let table7 = document.querySelector('#table6');
let btn3 = document.querySelector('.btn-3');

btn3.addEventListener('click', function() {
    let tr = document.createElement('tr');
    let trs = document.querySelectorAll('#table6 tr');

    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table7.appendChild(tr);
});



// n8
let table8 = document.querySelector('#table7');
let btn4 = document.querySelector('.btn-4');

btn4.addEventListener('click', function() {
    let tds = document.querySelectorAll('#table7 td');

    for (let td of tds) {
        td.textContent = Number(td.textContent) * 2;
    }
});



// n9
let parent2 = document.querySelector('#parent2');
let btn5 = document.querySelector('.btn-5');
let lik = document.querySelectorAll('#parent2 li');

btn5.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = parent2.children.length + 1;

    li.addEventListener('click', function() {
        this.remove();
    });

    parent2.appendChild(li);
});

for (let li of lik) {
    li.addEventListener('click', function() {
        this.remove();
    });
}



// n10
let elemx = document.querySelector('#elemx');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
	elemx.remove();
	event.preventDefault(); 
});



// n11/1
let elems = document.querySelectorAll('#ul li');

for (let elem of elems) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';
	
	elem.appendChild(remove);
}



// n11/2
let trs = document.querySelectorAll('#table8 tr');

for (let tr of trs) {
    let td = document.createElement('td');
    tr.appendChild(td);

    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    td.appendChild(remove);

    remove.addEventListener('click', function(event) {
        tr.remove(); 
        event.preventDefault();
    });
}



// n12/1
let elem3 = document.querySelector('#elem3');
let input3 = document.querySelector('#input3');

input3.value = elem3.textContent;

input3.addEventListener('keypress', function() {
	elem3.textContent = input3.value;
});



// n12/2
let elem4 = document.querySelector('#elem5');

elem4.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem4.textContent;
	
	input.addEventListener('blur', function() {
		elem4.textContent = this.value;
		this.remove();
	});
	
	elem4.parentElement.appendChild(input);
});



// n13
let elem5 = document.querySelector('#elem6');

elem5.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem5.textContent;
	
	elem5.textContent = '';
	elem5.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem5.textContent = this.value;
		elem5.addEventListener('click', func);
	});
	
	elem5.removeEventListener('click', func);
});



// n14
let elemsx = document.querySelectorAll('#elem7 li');

for (let elem of elemsx) {
	elem.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = elem.textContent;
		
		elem.textContent = '';
		elem.appendChild(input);
		
		input.addEventListener('blur', function() {
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		
		elem.removeEventListener('click', func);
	});
}



// n15
let ps = document.querySelectorAll('#parent10 p span');
let pr = document.querySelectorAll('#parent10 p');

for (let p of pr) {
	let span = document.createElement('span');
	span.textContent = p.textContent;
	p.textContent = '';
	p.appendChild(span)

    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';

    p.appendChild(remove);

    remove.addEventListener('click', function(event) {
        p.remove(); 
        event.preventDefault();
    });
}

for (let p of ps) {
	p.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = p.textContent;
		
		p.textContent = '';
		p.appendChild(input);
		
		input.addEventListener('blur', function() {
			p.textContent = this.value;
			p.addEventListener('click', func);
		});
		
		p.removeEventListener('click', func);
	});
}



// n16/1-2
let plist = document.querySelectorAll('.n16-1-2 p');

for (let p of plist) {
	let span = document.createElement('span');
	span.textContent = p.textContent;
	p.textContent = '';
	p.appendChild(span)

    let crs = document.createElement('a');
    crs.href = '';
    crs.textContent = 'перечеркнуть';

    p.appendChild(crs);

    crs.addEventListener('click', function(event) {
		span.style.textDecoration = 'line-through';
		event.preventDefault();
		crs.remove(); 
    });
}



// n16/3-4
let trs1 = document.querySelectorAll('#table9 tr');

for (let tr of trs1) {
    let td = document.createElement('td');
    tr.appendChild(td);

    let grn = document.createElement('a');
    grn.href = '';
    grn.textContent = 'green';

    td.appendChild(grn);

    grn.addEventListener('click', function(event) {
		tr.classList.toggle('col');
        event.preventDefault();
    });
}



// n17
let p = document.querySelector('#elem8');
let btn6 = document.querySelector('.btn-1');

btn6.addEventListener('click', function() {
	p.classList.toggle('hs');
});



// n18

//1
// let btns = document.querySelectorAll('.n18 button');

// for (let button of btns) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

//2
// let btns = document.querySelectorAll('.n18 button');
// let elems2 = document.querySelectorAll('.n18 p');

// for (let i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener('click', function() {
// 		elems2[i].classList.toggle('hidden');
// 	});
// }

//3
let btns = document.querySelectorAll('.n18 button');

for (let btn of btns) {
	btn.addEventListener('click', function() {
		btn.previousElementSibling.classList.toggle('hs');
	});
}



// n19
let tdsw = document.querySelectorAll('#table10 td');

for (let td of tdsw) {
    td.addEventListener('click', function() {
        td.classList.toggle('col2'); 
    });
}



// n21/1-5
let bd = document.querySelector('.n21');
let elements = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];

for (let i = 0; i < 1; i++) {
    let ul = document.createElement('ul');

    for (let elem of elements) {
        let li = document.createElement('li');

        li.textContent = elem;
        ul.appendChild(li);
    }

    bd.appendChild(ul);

	let lis = document.querySelectorAll('.n21 li');

	for (let li of lis) {
		let span = document.createElement('span');
		span.textContent = li.textContent;
		li.textContent = '';
		li.appendChild(span)

	    let remove = document.createElement('a');
	    remove.href = '';
	    remove.textContent = 'remove';

	    li.appendChild(remove);

	    remove.addEventListener('click', function(event) {
	        li.remove(); 
	        event.preventDefault();
	    });

		let crs = document.createElement('p');
		
		crs.textContent = 'перечеркнуть';
		li.appendChild(crs);
	
		crs.addEventListener('click', function() {
			span.style.textDecoration = 'line-through';
			crs.remove(); 
		});
	}

	let lispan = document.querySelectorAll('.n21 li span');

	for (let li of lispan) {
		li.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = li.textContent;
			
			li.textContent = '';
			li.appendChild(input);
			
			input.addEventListener('blur', function() {
				li.textContent = this.value;
				li.addEventListener('click', func);
			});
	
			li.removeEventListener('click', func);
		});
	}

	let input = document.createElement('input');
    input.placeholder = 'Введите новый элемент';

	input.addEventListener('blur', function() {
		let li = document.createElement('li');
		li.classList.add('newli');

        li.textContent = input.value;
        ul.appendChild(li);

		let lisnew = document.querySelectorAll('.newli');

		for (let li of lisnew) {
			let span = document.createElement('span');
			span.textContent = li.textContent;
			li.textContent = '';
			li.appendChild(span)
	
			let remove = document.createElement('a');
			remove.href = '';
			remove.textContent = 'remove';
	
			li.appendChild(remove);
	
			remove.addEventListener('click', function(event) {
				li.remove(); 
				event.preventDefault();
			});
	
			let crs = document.createElement('p');
			
			crs.textContent = 'перечеркнуть';
			li.appendChild(crs);
		
			crs.addEventListener('click', function() {
				span.style.textDecoration = 'line-through';
				crs.remove(); 
			});
		}
	
		let newlispan = document.querySelectorAll('.newli span');
	
		for (let li of newlispan) {
			li.addEventListener('click', function func() {
				let input = document.createElement('input');
				input.value = li.textContent;
				
				li.textContent = '';
				li.appendChild(input);
				
				input.addEventListener('blur', function() {
					li.textContent = this.value;
					li.addEventListener('click', func);
				});
		
				li.removeEventListener('click', func);
			});
		}
		
		// let elem = document.querySelector('.n21 li')
		// let clone = elem.cloneNode(true);
        // ul.appendChild(clone);

		// let cloneli = document.querySelector('.n21 li:last-child span')
		// cloneli.textContent = input.value;

		//либо добавлять значени валуе инпута в массив...
		//либо повторять код выше с другими переменными и элементами...
		//либо обернуть код выше в функцию и применять её к добавленным элментам...
    });

    bd.appendChild(input);
}



// n21/6-9
let table11 = document.querySelector('.tablexvc');
let usersx = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of usersx) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table11.appendChild(tr);
}

let tds = document.querySelectorAll('.n21-2 td');

for (let td of tds) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let trs2 = document.querySelectorAll('.n21-2 tr');

for (let tr of trs2) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';

	tr.appendChild(remove);

	remove.addEventListener('click', function(event) {
		tr.remove(); 
		event.preventDefault();
	});
}

let tablecln = document.querySelector('.n21-2');

let inputs = document.createElement('input');
inputs.placeholder = 'Введите имя работника';
tablecln.appendChild(inputs);

let inputa = document.createElement('input');
inputa.placeholder = 'Введите возраст работника';
tablecln.appendChild(inputa);

let inputp = document.createElement('input');
inputp.placeholder = 'Введите зарплату работника';
tablecln.appendChild(inputp);

let btnx = document.createElement('button');
btnx.textContent = 'Добавить работника';
tablecln.appendChild(btnx);

btnx.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = inputs.value;
	td1.classList.add('new');
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = inputa.value;
	td2.classList.add('new');
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = inputp.value;
	td3.classList.add('new');
	tr.appendChild(td3);
	
	table11.appendChild(tr);

	let tdsnew = document.querySelectorAll('.new');

	for (let td of tdsnew) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});



// n21/10-13
let table12 = document.querySelector('.tablexvb');
let usersv = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for (let user of usersv) {
	let tr = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = user.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = user.salary;
	tr.appendChild(td3);
	
	table12.appendChild(tr);
}

let tdsb = document.querySelectorAll('.tablexvb li');

for (let td of tdsb) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = td.textContent;
		
		td.textContent = '';
		td.appendChild(input);
		
		input.addEventListener('blur', function() {
			td.textContent = this.value;
			td.addEventListener('click', func);
		});

		td.removeEventListener('click', func);
	});
}

let tdli = document.querySelectorAll('.tablexvb ul');

for (let ul of tdli) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';

	ul.appendChild(remove);

	remove.addEventListener('click', function(event) {
		ul.remove(); 
		event.preventDefault();
	});
}

let tablemm = document.querySelector('.n21-3');

let inputs1 = document.createElement('input');
inputs1.placeholder = 'Введите имя работника';
tablemm.appendChild(inputs1);

let inputa1 = document.createElement('input');
inputa1.placeholder = 'Введите возраст работника';
tablemm.appendChild(inputa1);

let inputp1 = document.createElement('input');
inputp1.placeholder = 'Введите зарплату работника';
tablemm.appendChild(inputp1);

let btnx1 = document.createElement('button');
btnx1.textContent = 'Добавить работника';
tablemm.appendChild(btnx1);

btnx1.addEventListener('click', function() {
	let ul = document.createElement('ul');
	
	let td1 = document.createElement('li');
	td1.textContent = inputs1.value;
	td1.classList.add('new1');
	ul.appendChild(td1);
	
	let td2 = document.createElement('li');
	td2.textContent = inputa1.value;
	td2.classList.add('new1');
	ul.appendChild(td2);
	
	let td3 = document.createElement('li');
	td3.textContent = inputp1.value;
	td3.classList.add('new1');
	ul.appendChild(td3);
	
	table12.appendChild(ul);

	let tdsnew1 = document.querySelectorAll('.new1');

	for (let td of tdsnew1) {
		td.addEventListener('click', function func() {
			let input = document.createElement('input');
			input.value = td.textContent;

			td.textContent = '';
			td.appendChild(input);

			input.addEventListener('blur', function() {
				td.textContent = this.value;
				td.addEventListener('click', func);
			});

			td.removeEventListener('click', func);
		});
	}
});