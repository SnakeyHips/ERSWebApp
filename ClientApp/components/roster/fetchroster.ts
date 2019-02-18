import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Employee } from '../../models/employee';

@Component
export default class FetchRosterComponent extends Vue {
	weeks: number[] = [];
	employees: Employee[] = [];
	selectedWeeks: number[] = [];
	loading: boolean = false;
	loadingweeks: boolean = false;
	search: string = "";
	headers: object[] = [
		{ text: 'Id', value: 'id' },
		{ text: 'Name', value: 'name' },
		{ text: 'Contract', value: 'contractHours' },
		{ text: 'Appointed', value: 'appointedHours' },
		{ text: 'Absence', value: 'absenceHours' },
		{ text: 'LowRateU', value: 'lowRateUHours' },
		{ text: 'HighRateU', value: 'highRateUHours' },
		{ text: 'Overtime', value: 'overtimeHours' },
		{ text: 'Neg', value: 'negHours' },
		{ text: 'CO', value: 'coHours' },
	];

	mounted() {
		this.loadWeeks();
	}

	loadWeeks() {
		this.loadingweeks = true;
		fetch('api/Roster/GetRosterWeeks')
			.then(response => response.json() as Promise<number[]>)
			.then(data => {
				this.weeks = data;
				this.loadingweeks = false;
			})
	}

	stateColour(employee: Employee) {
		if (employee.negHours > 0) {
			return 'red';
		} else if (employee.coHours > 0) {
			return 'purple';
		}
	}

	loadRoster() {
		this.loading = true;
		fetch('api/Roster/GetRoster', {
			method: 'POST',
			body: JSON.stringify(this.selectedWeeks)
		})
			.then(response => response.json() as Promise<Employee[]>)
			.then(data => {
				this.employees = data;
				this.loading = false;
			});
	}

	viewRoster(id: number) {
		console.log(id);
	}
}
