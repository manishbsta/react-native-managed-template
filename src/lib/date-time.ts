type DateTimeFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

export class DateTimeUtil {
  static formatDate(date: Date, outputFormat?: DateTimeFormat) {
    const dd = new Date(date).getDate().toString().padStart(2, '0');
    const mm = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
    const yyyy = new Date(date).getFullYear();

    if (!outputFormat) {
      return `${dd}/${mm}/${yyyy}`;
    }

    switch (outputFormat) {
      case 'DD/MM/YYYY':
        return `${dd}/${mm}/${yyyy}`;
      case 'MM/DD/YYYY':
        return `${mm}/${dd}/${yyyy}`;
      case 'YYYY/MM/DD':
        return `${yyyy}/${mm}/${dd}`;
    }
  }
}
