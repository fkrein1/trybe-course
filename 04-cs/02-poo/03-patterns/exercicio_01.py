VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(message):
        return message


class LogError:
    def __init__(self, log):
        self._log = log

    def dispara_log(self, message):
        print(f"{VERMELHO}{self._log.dispara_log(message)}{RESET}")


class LogWarning:
    def __init__(self, log):
        self._log = log

    def dispara_log(self, message):
        print(f"{LARANJA}{self._log.dispara_log(message)}{RESET}")


class LogSuccess:
    def __init__(self, log):
        self._log = log

    def dispara_log(self, message):
        print(f"{VERDE}{self._log.dispara_log(message)}{RESET}")


if __name__ == "__main__":
    erro = LogError(Log)
    erro.dispara_log("O sistema está com erros")

    warning = LogWarning(Log)
    warning.dispara_log("O sistema está lento")

    sucess = LogSuccess(Log)
    sucess.dispara_log("O sistema está funcionando")
