/*ENUNCIADO

Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total
pagado por horas extras y nombre del trabajador con el menor salario obtenido.
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35, 5), (Carlos, 35, 0), (Pedro, 25, 10)
*/
import Cl_Trabajador from "./Cl_Trabajador.js"
import Cl_Empresa from "./Cl_Empresa.js"

let emp=new Cl_Empresa()

let t1=new Cl_Trabajador("Mary", 30, 10)
let t2=new Cl_Trabajador("José", 35, 5)
let t3=new Cl_Trabajador("Carlos", 35, 0)
let t4=new Cl_Trabajador("Pedro", 25, 10)

emp.procesarTrabajador(t1)
emp.procesarTrabajador(t2)
emp.procesarTrabajador(t3)
emp.procesarTrabajador(t4)

let salida=document.getElementById("salida")
salida.innerHTML=`Monto total pagado por horas extra: ${emp.montoTotalExtra()}.
<br>El trabajador ${emp.nombreMenor()} ha sido el peor pagado, con un total de ${emp.sueldoMenor()}$.`