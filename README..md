# Amifur

Amifur ("ami" del francés, que significa "amigo", y "fur" del inglés, que significa "pelaje" o "piel") es una plataforma web dedicada al apoyo integral de animales y sus cuidadores. Permite el registro de refugios y casas hogares, facilita donaciones mensuales o únicas, promueve la adopción responsable y ofrece recursos educativos.

## Características Principales

1. **Registro de Casas Hogares y Refugios**: Permite a casas hogares y refugios de animales registrarse en la plataforma para recibir apoyo financiero y promover la adopción de sus residentes peludos.

2. **Sistema de Suscripciones y Donaciones**: Los usuarios pueden suscribirse mensualmente o realizar donaciones únicas para apoyar a las casas hogares y refugios registrados, manteniendo un sistema de seguimiento.

3. **Comunidad Animal**: Ofrece un espacio interactivo donde los usuarios pueden compartir historias, fotos y necesidades de animales que necesitan ser adoptados, promoviendo así la adopción responsable y el amor por los animales.

4. **Directorio de Veterinarias**: Incluye un directorio de veterinarias registradas donde los usuarios pueden encontrar servicios de atención médica para sus mascotas.

5. **Mapa Interactivo**: Proporciona un mapa interactivo que muestra la ubicación de las veterinarias registradas, facilitando el acceso a servicios médicos para mascotas en todo momento.

6. **Educación y Sensibilización**: Ofrece recursos educativos sobre el cuidado de animales, consejos de adopción responsable, información sobre esterilización y vacunación, y más, para empoderar a los usuarios y promover prácticas de cuidado ético.

7. **Eventos y Actividades**: Organiza eventos y actividades comunitarias, como jornadas de adopción, campañas de esterilización y charlas educativas, para fomentar la participación activa de la comunidad en la causa animal.

8. **Programa de Voluntariado y Servicio Comunitario**: Permite a los usuarios registrarse como voluntarios para ayudar en refugios, casas hogares u otras organizaciones de rescate de animales. Los voluntarios pueden ofrecer su tiempo y habilidades para actividades como pasear perros, limpiar jaulas, socializar con los animales, entre otros.

## Tecnologías Utilizadas

- ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) Framework de backend para crear aplicaciones web robustas y escalables.
- ![Django REST Framework](https://img.shields.io/badge/DRF-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) Extensión de Django para construir API RESTful.
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) Biblioteca de JavaScript para construir interfaces de usuario dinámicas y responsivas.
- ![SQLite3](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) Sistema de gestión de bases de datos liviano y autónomo.

## Cómo Ejecutar la Aplicación

1. **Clonar el repositorio**:
    ```sh
    git clone https://github.com/D-Maysena/
    cd amifur
    ```

2. **Crear y activar un entorno virtual**:
    ```sh
    python -m venv venv
    source env/bin/activate 
    ```

3. **Instalar dependencias**:
    ```sh
    pip install -r requirements.txt
    ```

4. **Realizar migraciones y ejecutar el servidor**:
    ```sh
    python manage.py migrate
    python manage.py runserver
    ```

5. **Instalar dependencias de frontend y ejecutar React**:
    ```sh
    cd frontend
    npm install
    npm run dev
    ```
---
Quiero agradecer sinceramente a mi tutor de proyecto y de curso, **[Ernesto Vargas](https://github.com/xSarscov)**, cuya profunda experiencia y orientación fueron fundamentales para el éxito de este proyecto. Su dedicación y conocimiento han sido una inspiración para mí a lo largo de todo el desarrollo. 
