from string import punctuation

import nltk
from joblib import load
from nltk.tokenize import word_tokenize


class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not hasattr(cls, '_instance'):
            cls._instance = super().__new__(cls)
        return cls._instance


class ModelReducer(Singleton):
    # Инициализация модели и векторайзера
    def __init__(self):
        self.punctuation = list(punctuation)
        self.model_spam = load('spam_clf.joblib')
        self.vectorizer = load('vectorizer.joblib')
        self.lemmatizer = nltk.WordNetLemmatizer()

    # Принимает на вход текстовую строку
    # Возвращает метку класса спам или нет, где
    # 1 это спам
    # 0 это не спам
    def spam_or_not(self, s):
        # Нормализуем строку
        s_norm = self._normalize_text(s)

        # Получаем вектор строки
        vector = self.vectorizer.transform([s_norm])

        res = (self.model_spam.predict_proba(vector)[:, 1] > 0.75).astype(int)
        return res[0]

    # Функция принимает на вход текстовую строку.
    # Возвращает нормализованную строку
    def _normalize_text(self, s):
        # Токенизация
        tokens = word_tokenize(s)
        # Удаляем пунктуацию
        tokens_without_punct = [i for i in tokens if i not in punctuation]
        low_tokens = [i.lower() for i in tokens_without_punct]
        # удаляем стоп-слова из нашего текста
        stopwords = nltk.corpus.stopwords.words('russian')
        words_without_stop = [i for i in low_tokens if i not in stopwords]
        # Лемматизация
        lemms = [self.lemmatizer.lemmatize(word)
                 for word in words_without_stop]
        # Вывод значения в строке
        total = ''
        for el in lemms:
            total += el
            total += ' '
        return total
