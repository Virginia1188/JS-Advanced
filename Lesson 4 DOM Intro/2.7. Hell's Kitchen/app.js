function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      debugger;
      const input = document.querySelector('#inputs textarea').value;
      let resultRestaurant = document.querySelector('#bestRestaurant span').textContent;
      let resultWorkers = document.querySelector('#workers span').textContent;

      let allRestaurants = {};
      let arrOfStr = input.split(',');
      
      for (const line of arrOfStr) {
         
         let [restaurant, ...workers] = line.split(' - ');
         let bestSalary = 0;
         let avgSalary = 0;
         
         for (const worker of workers) {
            let [currentWorker, salary] = worker.split(' ');
            if(!allRestaurants.hasOwnProperty(restaurant)){
               allRestaurants[restaurant] ={};
            }
            allRestaurants[restaurant] = {workers: [currentWorker,salary]};
            avgSalary += Number(salary);
            bestSalary < salary ? bestSalary = Number(salary) : '';
         }

         avgSalary = avgSalary / workers.length;
         allRestaurants[restaurant].bestSalary = bestSalary;
         allRestaurants[restaurant].avgSalary = avgSalary;

      }
      let bestRestaurant;
      let bestAvgSalary = 0;
      let bestSalary;


      for (const [restaurant,properties] of Object.entries(allRestaurants)) {
         if(Number(properties.avgSalary) > bestAvgSalary){
            bestRestaurant = restaurant;
            bestAvgSalary = Number(properties.avgSalary);
            bestSalary = Number(properties.bestSalary);
         }
      }
      let resultWorkerString = '';
      let sortedWorkers = allRestaurants[bestRestaurant].workers.sort((w) => w[0][1] - w[1][1]).forEach(worker => {
         resultWorkerString += `Name ${worker[0]} With Salary: ${worker[1] }`;
      });
      

      resultRestaurant = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary}`;
      resultWorkers = resultWorkerString;

   }
}