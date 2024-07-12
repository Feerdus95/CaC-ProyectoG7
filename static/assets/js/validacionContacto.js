document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservaForm');
    const tableBody = document.getElementById('tablaReservas').querySelector('tbody');
    let isUpdating = false;
    const fetchReservas = async () => {
        
        const response = await fetch('https://Feerdus95.pythonanywhere.com/ver_actividad');
        const reservas = await response.json();
        tableBody.innerHTML = '';
        reservas.forEach(reservas => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reservas.id}</td>
                <td>${reservas.nombre}</td>
                <td>${reservas.apellido}</td>
                <td>${reservas.email}</td>
                <td>${reservas.fecha_desde}</td>
                <td>${reservas.fecha_hasta}</td>
                <td>${reservas.actividad}</td>
                <td>${reservas.monto}</td>
                <td>${reservas.cant_personas}</td>
                <td>${reservas.comentarios}</td>
                <td>
                    <button onclick="updateReserva(${reservas.id},'${reservas.nombre}','${reservas.apellido}','${reservas.email}','${reservas.fecha_desde}','${reservas.fecha_hasta}','${reservas.actividad}','${reservas.monto}','${reservas.cant_personas}','${reservas.comentarios}')">Editar</button>
                    <button onclick="deleteReserva(${reservas.id})">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    };

    const addReserva = async (reservas) => {
        await fetch('https://feerdus95.pythonanywhere.com/agregar_actividad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservas)
        });
        fetchReservas();
    };

    const updateReserva = async (id, reservas) => {
        await fetch(`https://feerdus95.pythonanywhere.com/actualizar_actividad/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservas)
        });
        fetchReservas();
    };

    const deleteReserva = async (id) => {
        await fetch(`https://feerdus95.pythonanywhere.com/eliminar_actividad/${id}`, {
            method: 'DELETE'
        });
        fetchReservas();
    };
    window.updateReserva = async (id, nombre, apellido, email, fecha_desde, fecha_hasta, actividad, monto, cant_personas, comentarios) => {
        document.getElementById('reservaId').value = id;
        document.getElementById('nomb').value = nombre;
        document.getElementById('apell').value = apellido;
        document.getElementById('e-mail').value = email;
        document.getElementById('fecha_d').value.stringify = fecha_desde;
        document.getElementById('fecha_h').value.stringify = fecha_hasta;
        document.getElementById('act').value = actividad;
        document.getElementById('monto').value = monto;
        document.getElementById('cant_pers').value = cant_personas;
        document.getElementById('coments').value = comentarios;
        isUpdating = true;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('reservaId').value;
        const nombre = document.getElementById('nomb').value;
        const apellido = document.getElementById('apell').value;
        const email = document.getElementById('e-mail').value;
        const fecha_desde = document.getElementById('fecha_d').value;
        const fecha_hasta = document.getElementById('fecha_h').value;
        const actividad = document.getElementById('act').value;
        const monto = document.getElementById('monto').value;
        const cant_personas = document.getElementById('cant_pers').value;
        const comentarios = document.getElementById('coments').value;
        const reserva = { id, nombre, apellido, email, fecha_desde, fecha_hasta, actividad, monto, cant_personas, comentarios };

        if (isUpdating) {
            await updateReserva(id, reserva);
            isUpdating = false;
        } else {
            await addReserva(reserva);
        }

        form.reset();
        document.getElementById('reservaId').value = '';
        fetchReservas();
    });

    window.deleteReserva = (id) => {
        if (confirm('¿Estás seguro de eliminar esta reserva?')) {
            deleteReserva(id);
        }
    };

    fetchReservas();
});