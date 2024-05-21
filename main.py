from flask import Flask

from buscasas import confSas, readFile, armaze_token, get_token, domains,content,currentContents,createDomiens,createDomiensEntries,upDateEntries

app = Flask(__name__)
app.config['DEBUG'] = True

#funcao get token 
armaze_token()
#servidor iniciou?
token = readFile()




@app.route('/api', methods=['GET'])
def get_buscasas():
    #busca = confSas(token)   
    #domain = domains(token)   
    #contents = content(token)   
    #currentContent = currentContents(token)   
    #createDomien = createDomiens(token)   
    #createDomiensEntrie = createDomiensEntries(token)   
    upDateEntrie = upDateEntries(token)   
    return upDateEntrie
    #quando expirar vai trazer um erro de api expirada
    # trata o erro e chama essa funcao
    #armaza_token()
    #chamr de novo get_buscasas()





@app.route('/', methods=['GET'])
def get_index():
    return "index"

if __name__ == "__main__": 
    app.run(debug=True,ssl_context='adhoc')
