import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
	   
class Table1 extends Component {
	constructor() {
		super();
		
		this.state = {
			threads: [],
		};
		
	}
	
	getTable(){
		
		const headerSortingStyle = { backgroundColor: 'rgb(200, 222, 230)' };
		
		if (this.props.threads !== undefined){
			
			let threadType = 'thread_identifier';
			
			const columns = [{
				dataField: threadType,
				text: 'Thread',
				sort: true,
				style: { cursor: 'pointer', color: 'blue' },
				headerSortingStyle,
				events: {
					onClick: (e, column, columnIndex, row, rowIndex) => {
						let url = "https://boards.4channel.org/vg/thread/" + row.thread_number;
						window.open(url);
					},
				}
			}, {
				dataField: 'replies',
				text: 'Replies',
				sort: true,
				headerSortingStyle
			}, {
				dataField: 'unique_ips',
				text: 'IPs',
				sort: true,
				headerSortingStyle
			}, {
				dataField: 'avg_ppip',
				text: 'Posts per IP',
				sort: true,
				headerSortingStyle
			}, {
				dataField: 'avg_pphr',
				text: 'Posts per Hour',
				sort: true,
				headerSortingStyle
			}, {
				dataField: 'duration',
				text: 'Duration',
				sort: true,
				headerSortingStyle,
				// Custom sorting function for duration
				sortFunc: (a, b, order, dataField, rowA, rowB) => {
					let hourA = a.slice(0, a.indexOf(":"));
					let hourB = b.slice(0, b.indexOf(":"));
					
					let minutessecsA = a.slice(a.indexOf(":") + 1);
					let minutessecsB = b.slice(b.indexOf(":") + 1);
					
					let minutesA = minutessecsA.slice(0, minutessecsA.indexOf(":"));
					let minutesB = minutessecsB.slice(0, minutessecsB.indexOf(":"));
					
					let secondsA = minutessecsA.slice(minutessecsA.indexOf(":") + 1);
					let secondsB = minutessecsB.slice(minutessecsB.indexOf(":") + 1);
					
					let totalsecondsA = (Number(hourA) * 60 * 60) + (Number(minutesA) * 60) + Number(secondsA);
					let totalsecondsB = (Number(hourB) * 60 * 60) + (Number(minutesB) * 60) + Number(secondsB);
					
					if (order === 'desc') {
						return totalsecondsB - totalsecondsA;
					}
					
					return totalsecondsA - totalsecondsB; // asc				
				}
			}, {
				dataField: 'img_replies',
				text: 'Images',
				sort: true,
				headerSortingStyle
			}, {
				dataField: 'img_prcnt',
				text: 'Image %',
				sort: true,
				headerSortingStyle
			}
			];
			
			const defaultSorted = [{
			  dataField: 'avg_pphr', 
			  order: 'desc' // desc or asc
			}];
			
			return (
				<BootstrapTable 
					bootstrap4 
					striped 
					condensed
					hover
					defaultSorted={defaultSorted} 
					keyField='thread_number' 
					data={this.props.threads} 
					columns={columns} 
				/>
			);
		}
		else {
			return (
			<h1>Loading...</h1>
			);
		}
	}
	
	render() {
		return (
			this.getTable()
		);
	}
}

export default Table1;
