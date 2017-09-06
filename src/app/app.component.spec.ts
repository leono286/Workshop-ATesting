// 1. import what you think it's necesary
import { AppComponent } from "./app.component";

describe('AppComponent', ()=>{
	// 2. declare a new instance of AppComponent class 	
	let component = new AppComponent();

	// 3. Create a string variable title
	let title: string = 'Chuck Norris Jokes';
	let truly;

	beforeEach(()=>{
		truly = true;
	});

	it('should evaluate truly variable to return true', ()=>{
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	// 4. spec to evaluate title of AppComponent class
	it('should have as title "Chuck Norris Jokes"', ()=>{
		expect(component.title).toEqual(title);
	});
})