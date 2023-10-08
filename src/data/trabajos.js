/* Aquí irán todos los proyectos.
1- Se hace una variable con un array de objetos que contenga los trabajos
2- Vamos a tener una carpeta de imágenes (dentro de public) cuyo nombre de cada imagen será el id del trabajo para mostrarlo en la página
3- Para mostrarlo en Portafolio, tendrás que importar trabajos en Portafolio.js
4- Renderizarlo en Portafolio.js recorriendo los trabajos con un map y haciendo una función callback (es decir con un return que devuelva el dato del obj y su key identificativa)
Estás usando JSX --> Es decir, JS mezclado con HTML
5- Una vez lo muestras, puedes hacer en el nombre un link directo al trabajo.
*/

export const trabajos = [
    {
        'id': 'rou2go',
        'nombre': 'Rou2Go',
        'url': 'https://rou2go.netlify.app',
        'tecnologias': 'Javascript, CSS, Bootstrap, Html.',
        'categorias': 'Web',
        'descripcion': 'ExploreBook es una aplicación web moderna y elegante desarrollada en JavaScript, con un diseño optimizado utilizando CSS y componentes de Bootstrap. Esta aplicación está diseñada para los amantes de la naturaleza y la aventura, permitiéndoles explorar y descubrir libros relacionados con actividades al aire libre y rutas de senderismo.'
    },
    {
        'id': 'expensesapp',
        'nombre': 'ExpensesApp',
        'url': 'https://expensesappa.netlify.app',
        'tecnologias': 'Javascript, React, Node.js.',
        'categorias': 'App',
        'descripcion': 'GastoTracker es una aplicación web desarrollada en React diseñada para ayudar a los usuarios a llevar un seguimiento detallado de sus gastos anuales y analizar visualmente cómo se distribuyen a lo largo del año. La aplicación muestra tus gastos para gestionarlos y visualizar datos financieros personales.'
    },
    {
        'id': 'proyectoCurri',
        'nombre': 'Simulador de montaje de equipos en Realidad Virtual.',
        'url': 'https://youtu.be/9VPlUwxPWD0?si=i2W9MLvNVEZR1YUF',
        'tecnologias': 'Unreal Engine 4.27, Blueprints y C++, Oculus Quest 2, Blender.',
        'categorias': 'Game',
        'descripcion': 'Este video muestra los frutos de meses de arduo trabajo en la creación de un prototipo de simulador de montaje de equipos en realidad virtual (VR), desarrollado utilizando Unreal Engine 4.3. Este proyecto sienta las bases para la futura construcción de un simulador aún más sofisticado, que desempeñará un papel fundamental como recurso complementario en entornos educativos.'
    },
    {
        'id': 'youtube3',
        'nombre': 'Youtube',
        'url': 'https://www.youtube.com/watch?v=8ui9umU0C2g&ab_channel=manchesterorchVEVO',
        'tecnologias': 'JS, React, PHP, Symfony',
        'categorias': 'Videos',
        'descripcion': 'Lorem Ipsum'
    },
    {
        'id': 'udemy',
        'nombre': 'Udemy',
        'url': 'https://www.udemy.com/home/my-courses/learning/',
        'tecnologias': 'Mean Stack',
        'categorias': 'Cursos',
        'descripcion': 'Lorem Ipsum'
    },
    {
        'id': 'linkedIn',
        'nombre': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/hdortizjinez/',
        'tecnologias': 'HTML, CSS, Bootstrap, PHP, Laravel',
        'categorias': 'Red Social',
        'descripcion': 'Lorem Ipsum'
    }
];