# Clínica Dos de Mayo: rediseño para pedir cita por teléfono

Preparación para revisión, 13 de noviembre de 2026. No publicado. No fusionar ni desplegar sin aprobación de Antonio.

## Qué cambia

- Nueva portada con fotografía real de recepción, titular principal y llamada a reserva por teléfono antes del primer desplazamiento en móvil.
- Verde y violeta tomados como referencia visual de la fachada. Identificador tipográfico «dm+» propuesto para revisión, no presentado como logotipo oficial.
- Foto de consulta en el bloque de clínica, foto de fachada junto a dirección y horario.
- Navegación, pie, portada de tratamientos y llamadas a reserva con el mismo diseño.
- Botón fijo móvil «Llamar para pedir cita» y acceso a indicaciones. Teléfono correcto: +34 916 14 67 70.
- Sin formularios, sin llamadas a FormSubmit ni campos de contacto. El componente antiguo ContactForm se convierte en una llamada a reserva telefónica si vuelve a importarse.
- Iconos vectoriales en los controles compartidos. No dependen de una fuente emoji.
- Horario actualizado según la ficha Google actual. No se muestran disponibilidad de citas ni «abierto ahora» inferidos.
- Valoración 4,6/5 y 134 reseñas con acceso a Google. No se muestran testimonios resumidos como si fueran citas textuales.
- Siete enlaces internos antiguos que no tenían página de destino se corrigen a las rutas existentes.

## Contenido que se propone omitir del inicio

- Tarjetas de Laura, Gema y Ana con especialidades: no se verificó la plantilla actual en fuentes propias. Los comentarios antiguos mencionan nombres distintos y no demuestran quién trabaja hoy. Los archivos originales siguen recuperables en la base de Git, no se borran registros de pacientes ni equipo.
- Testimonios del JSON anterior: eran resúmenes de comentarios, sin fidelidad de cita ni estrellas verificadas por persona. Se sustituyen en la presentación por acceso directo a reseñas Google, no por testimonios inventados.
- Mapa incrustado antiguo: tenía un identificador genérico y no acreditaba la ubicación. Se usa la foto de fachada y enlace a indicaciones de Calle Soria 2.
- Las antiguas afirmaciones generales de experiencia se acotan a experiencia en cirugía percutánea MIS, que sí declara la web propia.

## Fuentes consultadas el 13 de noviembre de 2026

- https://clinicadosdemayo.com : quiropodia, cirugía MIS con más de 15 años, ortopodología y biomecánica.
- https://fisiomed2001.com/podologo-mostoles/ : tratamientos, dirección y teléfono. Sus comentarios históricos no prueban plantilla actual y no se usan para inventarla.
- https://www.google.com/search?q=Cl%C3%ADnica+Dos+de+Mayo+Pod%C3%B3logo+M%C3%B3stoles&hl=es : ficha exacta en Calle Soria 2, 28934 Móstoles, teléfono 916 14 67 70; 4,6/5 y 134 reseñas. Horario desplegado: lunes y martes 9:30-19:00, miércoles 9:30-19:30, jueves y viernes 9:30-13:30, sábado y domingo cerrado.
- https://todoestaenmostoles.com/es/shops/clinica-dos-de-mayo : corroboró contacto, pero el horario no coincide por completo con la ficha Google. Se prefirió el desplegable actual de Google y se indica consultar festivos por teléfono.

## Pruebas

- npm ci y npm run build con los manifiestos originales, sin cambio de dependencias: 19 páginas generadas.
- 19 rutas comprobadas en anchura móvil de 390 px: sin formulario, sin desbordamiento horizontal y todos los enlaces telefónicos con destino tel:+34916146770.
- Inicio comprobado además a 1440 px; tres fotos cargadas; enlaces de ancla válidos.
- Vistas inspeccionadas de inicio, tratamientos, clínica, ubicación y reserva; portada de una subpágina comprobada en escritorio y móvil.
- Los botones telefónicos abren el destino tel:. No se ha hecho ninguna llamada real ni probado el marcador de un teléfono físico.

## Pendientes antes de publicar

1. Revisión visual y aprobación de Antonio.
2. Llevar el cambio a commit y PR. La rama de origen de la web Vercel es claude/astro-clinic-website-dSV2Y, distinta de la rama por defecto HTML. Confirmar la ruta de despliegue; no asumir que un merge a la rama por defecto publique esta web.
3. Revisar el contenido clínico heredado de las 18 subpáginas. Ver REVISION-CLINICA-PENDIENTE.md. Los cambios visuales no lo validan. No se han corregido indicaciones médicas por cuenta propia.
4. Las dependencias originales notifican 17 incidencias de seguridad, incluida una crítica en Astro. No se actualizan paquetes en este encargo visual; requiere revisión técnica separada antes de la promoción a producción.
5. Verificar preview externo de la versión final y publicación solo tras autorización.

## Aclaración WhatsApp, 13 noviembre 2026 16:42
Antonio confirma directamente que 916146770 también recibe WhatsApp. CTA secundario en portada, cierre de todas las páginas y barra móvil; llamada sigue siendo principal. Enlace con consulta genérica editable antes del envío. Sin mensajes de prueba ni contacto con terceros.

## Preparación para publicación autorizada, 13 noviembre 2026 18:12

Antonio aprueba publicar el rediseño y mantener las páginas de tratamiento/zona con textos breves sin promesas clínicas no verificadas. Se conserva la portada, se sustituyen las 18 subpáginas por fichas neutrales con contacto, y se eliminan de ellas plazos, resultados, cifras y credenciales sin evidencia. Los textos originales quedan recuperables en el historial anterior; REVISION-CLINICA-PENDIENTE.md es un inventario histórico, no texto vigente que deba publicarse como afirmación.

El destino actual de producción verificado en Vercel es clinicadosdemayo-es.vercel.app. Canonicals, OpenGraph, JSON-LD, sitemap y robots pasan a ese destino. No se modifica DNS, configuración Vercel ni dominios externos.

Antonio confirma directamente a18:13:50 que el titular/política es el mismo de Fisiomed. Se incorpora FISIOMED2001SL, NIFB84605740, y enlace a política oficial https://fisiomed2001.com/politica-de-privacidad/ verificada hoy. La preparación no equivale a publicación hecha. Dependencias originales conservadas, auditoría técnica separada.
