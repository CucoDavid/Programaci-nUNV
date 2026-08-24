import promptSync from "prompt-sync";
const prompt = promptSync();
const fullName = prompt("Ingresa tu nombre completo: ");
const age = Number(prompt("Ingresa tu edad:"));
const inscripcion = new Date(prompt("Ingresa la fecha de inscripción (YYYY-MM-DD):"));
const carrera = prompt("Ingresa el nombre de la carrera que inscribiste: ");
console.log(`
                ====================================================================================================================
                        Hola bienvenido a la universidad de oriente
                                        ${fullName}
                        es un honor para nosotros que te hayas inscrito en nuestra universidad
                        esperamos que tu estadia sea de lo mejor y que aprendas mucho en nuestra universidad.
                =====================================================================================================================
                Al parecer inscribiste en la carrera de ${carrera} y tu fecha de inscripción fue el
                ${inscripcion.toDateString()}
                muy buena eleccion de carrera tiene una excelente proyeccion laboral a futuro, esperamos que te vaya muy bien 
                en tu carrera y que logres todos tus objetivos.

                
                Felicidades comenzaste una nueva etapa, que no solo es de aprendizaje sino de crecimiento personal y profesional.
                Att:Universidad de Oriente(UNIVO)
                `);
