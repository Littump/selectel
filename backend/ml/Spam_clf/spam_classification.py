from joblib import dump, load
from nltk.tokenize import word_tokenize
from string import punctuation
from bs4 import BeautifulSoup
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
from sklearn.linear_model import LogisticRegression
import numpy as np
import nltk

punctuation = list(punctuation)
nltk.download('wordnet')
nltk.download('punkt')

# Инициализация модели и векторайзера.
model_spam = load('spam_clf.joblib')
vectorizer = load('vectorizer.joblib')


# Принимает на вход текстовую строку
# Возвращает метку класса спам или нет, где
# 1 это спам
# 0 это не спам
def spam_or_not(s):
    # Нормализуем строку
    s_norm = normalize_text(s)
    # Получаем вектор строки
    vector = vectorizer.transform([s_norm])

    res = (model_spam.predict_proba(vector)[:, 1] > 0.75).astype(int)
    return res[0]

# ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

# Функция принимает на вход текстовую строку.
# Возвращает нормализованную строку
def normalize_text(s):
    # Очистка от html
    soup = BeautifulSoup(s, 'html.parser')
    soup.get_text()
    # Удаление скрипта
    for data in soup(['style', 'script']):
        data.decompose()
    script_out = ' '.join(soup.stripped_strings)
    # Токенизация
    tokens = word_tokenize(s)
    # Удаляем пунктуацию
    tokens_without_punct = [i for i in tokens if i not in punctuation]
    low_tokens = [i.lower() for i in tokens_without_punct]
    # удаляем стоп-слова из нашего текста
    stopwords = nltk.corpus.stopwords.words('russian')
    words_without_stop = [i for i in low_tokens if i not in stopwords]
    # Лемматизация
    lemmatizer = nltk.WordNetLemmatizer()
    lemms = [lemmatizer.lemmatize(word) for word in words_without_stop]
    # Вывод значения в строке
    total = ''
    for el in lemms:
        total += el
        total += ' '
    return total
