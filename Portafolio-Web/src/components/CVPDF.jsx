import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#1e40af',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#1f2937',
  },
  skillContainer: {
    marginBottom: 10,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    color: '#1f2937',
  },
  skillLevel: {
    fontSize: 12,
    color: '#6b7280',
  },
  projectContainer: {
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  tag: {
    fontSize: 10,
    color: '#2563eb',
    backgroundColor: '#dbeafe',
    padding: '2 6',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  header: {
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 3,
  },
});

// Create Document Component
const CVPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Manuel Ulin</Text>
        <Text style={styles.text}>Desarrollador Full Stack</Text>
        <Text style={styles.contactInfo}>manuel.ulin@email.com</Text>
        <Text style={styles.contactInfo}>Ciudad de Guatemala, Guatemala</Text>
      </View>

      {/* Educación */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Educación</Text>
        <Text style={styles.text}>Licenciatura en Ingeniería en Ciencias de la Computación</Text>
        <Text style={styles.text}>Universidad del Valle de Guatemala</Text>
        <Text style={styles.text}>2021 - Presente</Text>
        <Text style={styles.text}>Cursando tercer año de la carrera con enfoque en desarrollo de software y sistemas.</Text>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Habilidades Técnicas</Text>
        
        <Text style={styles.text}>Frontend</Text>
        <View style={styles.skillContainer}>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>HTML5</Text>
            <Text style={styles.skillLevel}>90%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>CSS3</Text>
            <Text style={styles.skillLevel}>85%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>JavaScript</Text>
            <Text style={styles.skillLevel}>85%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>React</Text>
            <Text style={styles.skillLevel}>80%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Tailwind CSS</Text>
            <Text style={styles.skillLevel}>85%</Text>
          </View>
        </View>

        <Text style={styles.text}>Backend</Text>
        <View style={styles.skillContainer}>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Node.js</Text>
            <Text style={styles.skillLevel}>75%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Express.js</Text>
            <Text style={styles.skillLevel}>70%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>MongoDB</Text>
            <Text style={styles.skillLevel}>65%</Text>
          </View>
        </View>

        <Text style={styles.text}>Herramientas</Text>
        <View style={styles.skillContainer}>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Git</Text>
            <Text style={styles.skillLevel}>80%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>GitHub</Text>
            <Text style={styles.skillLevel}>85%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>VS Code</Text>
            <Text style={styles.skillLevel}>90%</Text>
          </View>
        </View>
      </View>

      {/* Proyectos */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Proyectos Destacados</Text>
        
        <View style={styles.projectContainer}>
          <Text style={styles.projectTitle}>E-commerce App</Text>
          <Text style={styles.projectDescription}>
            Aplicación web de comercio electrónico con funcionalidades completas de carrito de compras, autenticación de usuarios y gestión de productos.
          </Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>React</Text>
            <Text style={styles.tag}>Tailwind CSS</Text>
            <Text style={styles.tag}>Node.js</Text>
            <Text style={styles.tag}>MongoDB</Text>
            <Text style={styles.tag}>Express</Text>
          </View>
        </View>

        <View style={styles.projectContainer}>
          <Text style={styles.projectTitle}>Pokemon API Explorer</Text>
          <Text style={styles.projectDescription}>
            Aplicación web interactiva que consume la API de Pokemon para mostrar información detallada de los pokémon.
          </Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>JavaScript</Text>
            <Text style={styles.tag}>HTML</Text>
            <Text style={styles.tag}>CSS</Text>
            <Text style={styles.tag}>Pokemon API</Text>
            <Text style={styles.tag}>Fetch API</Text>
          </View>
        </View>

        <View style={styles.projectContainer}>
          <Text style={styles.projectTitle}>Reloj Digital con Hooks</Text>
          <Text style={styles.projectDescription}>
            Reloj digital desarrollado con React Hooks, uso de useEffect y useState, incluye múltiples zonas horarias.
          </Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>React</Text>
            <Text style={styles.tag}>Hooks</Text>
            <Text style={styles.tag}>JavaScript</Text>
            <Text style={styles.tag}>CSS Modules</Text>
          </View>
        </View>
      </View>

      {/* Certificaciones */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Certificaciones</Text>
        <Text style={styles.text}>Desarrollo Web Full Stack - Academia de Código (2023)</Text>
        <Text style={styles.text}>Programa intensivo de desarrollo web con React, Node.js y bases de datos.</Text>
      </View>
    </Page>
  </Document>
);

export default CVPDF; 