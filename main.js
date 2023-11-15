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

// n21/6-9

// n21/10-13