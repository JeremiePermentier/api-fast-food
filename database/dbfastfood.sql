-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 11 mai 2021 à 19:14
-- Version du serveur :  8.0.23-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dbfastfood`
--

-- --------------------------------------------------------

--
-- Structure de la table `Accompaniments`
--

CREATE TABLE `Accompaniments` (
  `idAccompaniment` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Desserts`
--

CREATE TABLE `Desserts` (
  `idDessert` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Drinks`
--

CREATE TABLE `Drinks` (
  `idDrink` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Flats`
--

CREATE TABLE `Flats` (
  `idFlat` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Ordered`
--

CREATE TABLE `Ordered` (
  `idOrdered` int NOT NULL,
  `menuType` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `flat` varchar(100) NOT NULL,
  `accompaniment` varchar(100) NOT NULL,
  `drink` varchar(100) NOT NULL,
  `desserts` varchar(100) DEFAULT 'Aucun déssert',
  `extra` varchar(100) DEFAULT 'Aucun supplément',
  `drinkHots` varchar(100) DEFAULT 'Aucune boisson chaude',
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `idUsers` int NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` int NOT NULL,
  `isAdmin` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Accompaniments`
--
ALTER TABLE `Accompaniments`
  ADD PRIMARY KEY (`idAccompaniment`);

--
-- Index pour la table `Desserts`
--
ALTER TABLE `Desserts`
  ADD PRIMARY KEY (`idDessert`);

--
-- Index pour la table `Drinks`
--
ALTER TABLE `Drinks`
  ADD PRIMARY KEY (`idDrink`);

--
-- Index pour la table `Flats`
--
ALTER TABLE `Flats`
  ADD PRIMARY KEY (`idFlat`);

--
-- Index pour la table `Ordered`
--
ALTER TABLE `Ordered`
  ADD PRIMARY KEY (`idOrdered`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`idUsers`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Accompaniments`
--
ALTER TABLE `Accompaniments`
  MODIFY `idAccompaniment` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Desserts`
--
ALTER TABLE `Desserts`
  MODIFY `idDessert` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Drinks`
--
ALTER TABLE `Drinks`
  MODIFY `idDrink` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Flats`
--
ALTER TABLE `Flats`
  MODIFY `idFlat` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Ordered`
--
ALTER TABLE `Ordered`
  MODIFY `idOrdered` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `idUsers` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
